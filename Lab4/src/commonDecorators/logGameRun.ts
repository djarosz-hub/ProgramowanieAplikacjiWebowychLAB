export function logGameRun(target: Object, propKey: string, descriptor: PropertyDescriptor): void {
    const orignalFn = descriptor.value;
    descriptor.value = function(){
        console.log(`Wywołano ${this.name}`);
        return orignalFn.call();
    }
}