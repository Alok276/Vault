import React from "react";
import Logo from "../Logo/Logo";
import Footer from "../Footer/Footer";

const CreateEvault = () => {
    return(
        <div className="CaseManager inline-block items-center">
            <header>
                <div className="flex items-center">
                <Logo/>
                <p className="header_paragraph f3 white center">Create eVault</p>
                </div>
            </header>

            <div className="peace">
                <p>
                "Experience the peace of mind that comes with a blockchain eVault - where your documents are stored securely and forever."
                </p>
            </div>
            <h3>Create Folder</h3>
            <table border="1">
                <tr>
                    <td>S.No.</td>
                    <td>Name</td>
                    <td>Type</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>ID's</td>
                    <td>pdf</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Property</td>
                    <td>pdf</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Marksheet</td>
                    <td>pdf</td>
                </tr>
            </table>


            <Footer/>
        </div>
    )
}

export default CreateEvault;