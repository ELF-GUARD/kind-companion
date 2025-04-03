import { sendAlert } from './alertSystem.js';

function handleStateChange(newState, context) {
  sendAlert(newState, context); // Log & simulate dispatch
}
