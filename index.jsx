import { styled, css } from 'uebersicht';

/**
 * This must be prefixed before the URL in any API call. For example:
 * let url = `${PROXY}myapi.com/v1/products`
 */
const PROXY = 'http://127.0.0.1:41417/';


/**
 * An object with the initial state of your widget.
 * If you provide a custom updateState function you might need to define the 
 * initial state that gets passed on initial render of the widget.
 * before any command has been run.
 *
 * You can optionally delete this. If you delete it, it takes the form { output: '' }
 */
export const initialState = {
  output: 'Fetching...',
  error: '',
}

/**
 * Good practice for tracking your event types.
 */
const eventCreator = {
  example: 'EXAMPLE_EVENT_TYPE',
}

/**
 * When provided, this function must return the next state, which will be passed as props to your render function. 
 * The default function will return output and error from the event object.
 * 
 * Interact with this function by calling the dispatch function.
 * 
 * @param {type: string, data: any} event 
 * @param {any} previousState 
 */
export const updateState = (event, previousState) => {
    switch (event.type) {
        case eventCreator.example: return { output: event.data }
        default: return previousState;
    }
};


/**
 * A function that is called the first time your widget loads. Many
 * widgets won't need this, but you can use this function to perform any initial setup for
 * more advanced use cases. For example, instead of relying on periodic shell commands, you
 * might want to open and listen to WebSocket events to update your widget.
 * 
 * @param { ({type: string, data: any}) => void} dispatch: A function used to interact with updateState. Takes an event type and a data object.
 */
export const init = (dispatch) => {
    // dispatch({type: eventCreator.example, data: []});
}

/**
 * This is executed periodically, defined by refreshFrequency (below). 
 * 
 * It can take two forms. You may only use one form at a time. 
 * 
 * This is the first form. It receives the dispatch function and allows one to perform an action.
 * 
 * @param { ({type: string, data: any}) => void} dispatch: A function used to interact with updateState. Takes an event type and a data object.
 */
export const command = async (dispatch) => {
  
};

/**
 * This is the second form. Setting this to a string will execute the provided script command.
 */
// export const command = 'echo Hello World'

/**
 * An number specifying how often command (above) is executed.
 */
export const refreshFrequency = 1.8e6; // 30m


/**
 * An object or string defining the CSS rules to applied to the root of your widget.
 * It is most commonly used control the position of your widget. 
 * It is converted to a CSS class name using the Emotion CSS-in-JS library.
 */
export const className = `
  right: 2em;
  top: 2em;
  font-family: -apple-system;
  z-index: 1;
  width: 20%;
  max-height: 50%;
`;


/**
 * If you know React functional components you know how render works. The props passed to 
 * this function is whatever state your updateState function returns. If you don't provide 
 * your own updateState function, the default props that are passed are output and error,
 * containing the output your command produced and any error that might have occurred. 
 * @param {any} state 
 * @param { ({type: string, data: any}) => void} dispatch: A function used to interact with updateState. Takes an event type and a data object.
 */
export const render = (state, dispatch) => (
  error ? (
    <div>
      {`Error retrieving: ${error}`}
    </div>
  ) : (
    <div>
      { state.output }
    </div>
  )
);
