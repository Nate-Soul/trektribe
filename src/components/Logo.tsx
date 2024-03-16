import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
        <Image src="/media/images/logo/logo.png" width={44} height={16} alt="trektribe logo" />    
    </Link>
  )
}

export default Logo
