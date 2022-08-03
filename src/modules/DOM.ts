/**
 * Is like document.querySelector, but it throws if not found.
 */
export function getBySelector(
  ...args: Parameters<typeof document.querySelector>
) {
  const el = document.querySelector(...args)

  if (el == null) {
    throw Error(`${args[0]} element not found.`)
  }

  return el
}
