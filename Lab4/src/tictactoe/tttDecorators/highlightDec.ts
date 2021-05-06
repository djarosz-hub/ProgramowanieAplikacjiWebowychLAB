// export function highlightCellChoose(target: Object, propKey: string, descriptor: PropertyDescriptor): void {
//     const orignalFn = descriptor.value;

//     descriptor.value = function (args: any) {
//         const cell = this;
//         cell.htmlElement.classList.add('highlighted');
//         setTimeout(() => {
//             cell.htmlElement.classList.remove('highlighted');
//         }, 200);
//         const res = orignalFn.call(this, args);
//         return res;
//     }
// }
export const highlightCellChoose = () => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const cell = this;
            cell.htmlElement.classList.add('highlighted');
            setTimeout(() => {
                cell.htmlElement.classList.remove('highlighted');
            }, 100);
            const result = originalMethod.apply(this, args);
            return result;
        };
    };
};