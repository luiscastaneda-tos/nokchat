import { readHoteles, readHotelInfo } from "./google";
import { getTicketData } from "./zoho";
import { createCupon } from "./general";

//Maneja las llamadas de funcion
import { OpenAI } from "openai"; // Add this import statement if OpenAI type is not imported

export async function handleRequiresAction(
  run: any,
  openai: OpenAI
): Promise<any> {
  //Verifica si hay acciones por hacer
  if (
    run.required_action &&
    run.required_action.submit_tool_outputs &&
    run.required_action.submit_tool_outputs.tool_calls
  ) {
    // Promise.all recibe un array y espera a que todas las promesas de ahi se cumplan
    console.log(run.required_action.submit_tool_outputs.tool_calls);
    const toolOutputs = await Promise.all(
      //El array que le vamos a mandar son todas las acciones que se deben realizar y que se encuentran en tool_calls
      run.required_action.submit_tool_outputs.tool_calls.map(
        async (tool: any) => {
          const args: any = JSON.parse(tool.function.arguments);
          console.log(args);

          if (tool.function.name === "readHoteles") {
            console.log(args);
            const output = await readHoteles(args);
            console.log(output);
            return {
              tool_call_id: tool.id,
              output: output,
            };
          } else if (tool.function.name === "readHotelInfo") {
            const output = await readHotelInfo(args);
            console.log(output);
            return {
              tool_call_id: tool.id,
              output: output,
            };
          } else if (tool.function.name === "getTicketData") {
            const output = await getTicketData(args);
            console.log(output);
            return {
              tool_call_id: tool.id,
              output: output,
            };
          } else if (tool.function.name === "createCupon") {
            const output = await createCupon(args);
            console.log(output);
            return {
              tool_call_id: tool.id,
              output: output,
            };
          }
        }
      )
    );

    let new_run;
    if (toolOutputs.length > 0) {
      new_run = await openai.beta.threads.runs.submitToolOutputsAndPoll(
        run.thread_id,
        run.id,
        { tool_outputs: toolOutputs }
      );
      console.log("Tool outputs submitted successfully.");
    } else {
      console.log("No tool outputs to submit.");
    }
    return await handleRunStatus(new_run, openai);
  }
}

//Esta función se encarga de manejar lo que ocurre una vez que se realiza el run para saber si ocurrio todo bien o necesita realizar una acción
export async function handleRunStatus(
  run: OpenAI.Beta.Threads.Runs.Run | undefined,
  openai: OpenAI
) {
  if (run?.status === "completed") {
    const messages = await openai.beta.threads.messages.list(run.thread_id);
    return {
      response: {
        thread_id: run?.thread_id,
        message: messages.data[0],
      },
      metadata: {
        run,
      },
      ok: true,
    };
  } else if (run?.status === "requires_action") {
    return await handleRequiresAction(run, openai);
  } else {
    console.error("Run did not complete:", run);
  }
}

module.exports = {
  handleRequiresAction,
  handleRunStatus,
};
