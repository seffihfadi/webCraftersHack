
const Input = ({ onChange, name, icon, title }) => {
  return (
    <div className="grp">
      <label htmlFor={name}>{title}</label>
      <input onChange={onChange} name={name} type={name} placeholder={`Enter Your ${title}`} required={true} />
      <span className="material-symbols-rounded">{icon}</span>
    </div>
  )
}

export default Input