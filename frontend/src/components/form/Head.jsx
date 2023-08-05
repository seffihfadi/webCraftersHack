
const Head = ({ head, desc }) => {
  return (
    <div className="flex flex-col items-center mb-10">
      <h1 className="text-4xl mb-4 font-bold">{head}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Head