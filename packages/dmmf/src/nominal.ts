const tag = Symbol();

export type Nominal<Type, Value> = { readonly [tag]: Type } & Value;

export const createNominal = <const Type, Value>(_: Type, value: Value): Nominal<Type, Value> => {
  return value as Nominal<Type, Value>;
};
