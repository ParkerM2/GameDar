import React from "react";


const CheapSearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Search For Game</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Runescape"
                    onChange={props.handleInputChange}
                />
                <div>
                    <h3>You are Currently Searching : {props.handleInputChange}</h3>
                </div>
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default CheapSearchForm