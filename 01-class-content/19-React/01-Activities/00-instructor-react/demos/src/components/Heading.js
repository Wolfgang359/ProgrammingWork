export const Heading = ({ level, children }) => {
  const element = {
    1: <h1>{children}</h1>,
    2: <h2>{children}</h2>,
    3: <h3>{children}</h3>,
    4: <h4>{children}</h4>,
    5: <h5>{children}</h5>,
    6: <h6>{children}</h6>
  }

  return element[level]
}