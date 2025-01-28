
import PackageHero from '../../components/packageFront/PackageHero'
import PackageList from '../../components/packageFront/PackageList'
import ProductShowcase from '../../components/packageFront/ProductShowcase'

const Packages = () => {
  return (
    <div className='bg-[#f4f5f5]'>
      <PackageHero />
      <PackageList />
      <ProductShowcase />
    </div>
  )
}

export default Packages
