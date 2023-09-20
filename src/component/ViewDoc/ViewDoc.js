import React from "react";
import Logo from "../Logo/Logo";

const ViewDoc = () => {
    return(
        <div className="CaseManager inline-block items-center">
            <header>
                <div className="flex items-center">
                <Logo/>
                <p className="header_paragraph f3 white center">eSafe Harbour</p>
                </div>
            </header>

            <div>
                <h3>ID's</h3>
                <h3>Upload Objects</h3>
            </div>
            <h3>Create Folder</h3>
            <table border="1">
                <tr>
                    <td>1</td>
                    <td>Aadhaar Card</td>
                    <td>id</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>PAN card</td>
                    <td>id</td>
                </tr>
            </table>
        </div>
    )
}

export default ViewDoc;