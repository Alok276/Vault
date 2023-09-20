import React from "react";
import Logo from "../../Logo/Logo";

const CaseDoc = () => {
    return(
        <div className="CaseManager inline-block items-center">
            <header>
                <div className="flex items-center">
                <Logo/>
                <p className="header_paragraph f3 white center">Case Doc</p>
                </div>
            </header>

            <div className="table">
            <table border="1">
                <tr>
                    <td>Case ID 4568</td>
                    <td>Status Pending</td>
                    <td>Upload</td>
                </tr>
                <br/>
                <tr>
                    <td>S.No.</td>
                    <td>Documents</td>
                    <td>View</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Sales Documents Formats</td>
                    <td>Click here</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Evidence Proof</td>
                    <td>Click here</td>
                </tr>   
            </table>

            <button>
                Tap for More Details
            </button>

            </div>
        </div>
    )
}

export default CaseDoc