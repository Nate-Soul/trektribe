

const NavbarSecondary = () => {

    const tabs = [
        {
            name: "All"
        },
        {
            name: "Travel Ideas"
        },
        {
            name: "Travel Tips"
        },
        {
            name: "Agencies"
        },
        {
            name: "More"
        },
    ]

  return (
    <nav className="h-[71px] bg-primary-500 text-light-600 flex place-items-center">
        <div className="container">
            <ul className="flex justify-center items-center gap-x-8">
                {
                    tabs && tabs.map((tab, tabIndex) => (
                        <li key={tabIndex}>
                            <button className="text-lg hover:text-white border-b border-transparent">
                                {tab.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default NavbarSecondary
