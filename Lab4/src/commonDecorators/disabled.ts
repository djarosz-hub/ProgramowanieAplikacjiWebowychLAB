import { BattleShips } from "../battleShips/battleShips";
import { Game } from "../gameModel";

export function disabled(ctorFn: Function){
    // console.log(ctorFn.prototype);
    ctorFn.prototype.available = false;
    // console.log(ctorFn.prototype);
}

// export function disabled2(target: any, propKey: any) {
//     Object.defineProperty(target, propKey, { value: false, writable: true });
// }

// export function disabled<T extends { new (...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       available = false;
//     };
//   }