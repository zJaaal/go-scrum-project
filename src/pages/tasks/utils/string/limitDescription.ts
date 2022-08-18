import { DescriptionState } from "../../types";

/**
 * @description This function takes an string and trim his length for ui integrity
 *              and adds a boolean to know whether to add a show more button or not
 * @param str
 * @returns The description state
 */
export const limitDescription = (str: string): DescriptionState => {
  if (str.length > 370)
    return { string: str.slice(0, 367).concat("..."), showMore: true };

  return { string: str, showMore: false };
};
