

const NavbarSecondary = () => {

    const tabs = [
        {
            text: "All"
        },
        {
            text: "Travel Ideas"
        },
        {
            text: "Travel Tips"
        },
        {
            text: "Agencies"
        },
        {
            text: "More"
        },
    ]

  return (
    <nav className="h-[71px] bg-primary-500 text-light-600 flex place-items-center">
        <div className="container">
            <ul className="flex justify-center items-center gap-x-8">
                {
                    tabs && tabs.map((tab, tabIndex) => (
                        <li key={tabIndex}>
                        {tab.text === "More" ? (
                        <>
                            <button className="text-lg hover:text-white border-b border-transparent">
                                {tab.text} <span className="bi-chevron-down ml-1"></span>
                            </button> 
                            <ul className="hidden">
                                <li>hola</li>
                            </ul>
                        </>
                        ) : (
                            <button className="text-lg hover:text-white border-b border-transparent">
                                {tab.text}
                            </button>
                        )}
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default NavbarSecondary
