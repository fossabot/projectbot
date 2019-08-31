/**
 * A Command to apply to a commander instance with the {@link applyOptions} function
 *
 * @export
 * @interface Command
 */
export interface Command {
  /**
   * The long command to use an identify the option later
   *
   * @type {string}
   * @memberof Command
   */
  long: string;
  /**
   * A short version of the long property (for less typing)
   *
   * @type {string}
   * @memberof Command
   */
  short: string;
  /**
   * A list of arguments to use
   *
   * @type {Argument[]}
   * @memberof Command
   */
  arguments?: Argument[];
  /**
   * A description of the command to be shown via the `--help` command
   *
   * @type {string}
   * @memberof Command
   */
  description: string;
  /**
   * A option to default to
   *
   * @type {any}
   * @memberof Command
   */
  default?: string | number | boolean;
}

/**
 * A argument for use in a {@link Command} object
 *
 * @export
 * @interface Argument
 */
export interface Argument {
  /**
   * Name of the argument
   *
   * @type {string}
   * @memberof Argument
   */
  name: string;
  /**
   * If this argument is mandatory or not
   *
   * @type {boolean}
   * @memberof Argument
   */
  needed: boolean;
}
