// Type definitions for recurserator 2.0.2
// Project: https://github.com/steelsojka/recurserator
// Definitions by: Steven Sojka <https://github.com/steelsojka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Recurserator {
  interface entries {
    <T>(obj: {[key: string]: T}): Iterator<[string, T]>;
    <T, U>(obj: { entries: () => Iterator<[T, U]>}): Iterator<[T, U]>;
  }

  interface RecursionBuilder<U extends Object> {
    recurse(): Iterator<[any, any, string, U]>;
    recurse<T extends Object>(obj: T, path?: string): Iterator<[any, any, string, T]>;
    yield(filter: (val: any, key: any, obj: U) => boolean): RecursionBuilder<U>;
    traverse(filter: (val: any, key: any, obj: U) => boolean): RecursionBuilder<U>;
    entries(extractor: (val: any, key: any, obj: U) => [any, any]): RecursionBuilder<U>;
    extractor(extractor: string): RecursionBuilder<U>;
    extractor(extractor: {[key: string]: any}): RecursionBuilder<U>;
    extractor(extractor: (val: any, key: any, obj: U) => [any, any]): RecursionBuilder<U>;
    clone(state?: {[key: string]: any}): RecursionBuilder<U>;
    [Symbol.iterator](): Iterator<[any, any, string, U]>;
  }

  interface RecursionBuilderStatic {
    new <T extends Object>(): RecursionBuilder<T>;
    new <T extends Object>(obj?: T, state?: {[key: string]: any}): RecursionBuilder<T>;
    create<T extends Object>(): RecursionBuilder<T>;
    create<T extends Object>(object?: T, state?: {[key: string]: any}): RecursionBuilder<T>;
    createExtractor<T extends Object>(target: T, name: string, index: number): void;
  }
}

declare module "recurserator" {
  export var entries: Recurserator.entries;
  export var RecursionBuilder: Recurserator.RecursionBuilderStatic;
  export default RecursionBuilder;
}

declare module "recurserator/entries" {
  const entries: Recurserator.entries;
  export default entries;
}

declare module "recurserator/RecursionBuilder" {
  const RecursionBuilder: Recurserator.RecursionBuilderStatic;
  export default RecursionBuilder;
}
