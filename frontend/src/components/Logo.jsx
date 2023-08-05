const Logo = ({ type = 'sm' }) => {
  const logoPath = `/src/assets/imgs/logo2.png`
  return (
    <div className="flex justify-center items-center py-4">
      <img className="w-8 aspect-auto" src={logoPath} alt="Logo" />
      {type == 'lg' && <h3 className="capitalize ml-2 font-bold text-lg text-[#032F3C]">agrouland</h3>}
    </div>
  )
}

export default Logo