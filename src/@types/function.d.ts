/**
 * @description A function that takes no arguments and returns nothing.
 */
type NullaryHandler = () => void;

/**
 * @description A function that takes one argument and returns nothing.
 * @template T - The type of the argument.
 */
type UnaryHandler<T> = (arg: T) => void;
