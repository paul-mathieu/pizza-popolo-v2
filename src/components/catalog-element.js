import React from "react";

const CatalogElement = ({pizza, extras}) => {

    const isBio = pizza.bio;
    const isVegan = pizza.vegan;
    
    return (

        <div className="col-md-6">
            <div className="info">
                <h3>{pizza.name}</h3>
                <div className="rating" />
                <div className="price">
                    <h3>${pizza.price}</h3>
                </div>
                <form>
                    {/* <div className="form-group"> */}
                        {/* <label><input type="checkbox"/>&nbsp;Test</label> */}
                        {/* {extras.map((extra, index) => 
                            // <label title={extra.description}>
                            //     <input type="checkbox" value={extra._id}/>
                            //     &nbsp;{extra.name}
                            // </label>

                            <label>
                                <input type="checkbox"/>
                                &nbsp;{extra.name}
                            </label>
                        )} */}
                        {/* {extras.map((extra) => {console.log(extra.name)})} */}
                        {/* {extras.map((extra) => <label><input type="checkbox"/>&nbsp;{extra.name}</label>)} */}
                    {/* </div> */}
                    <div>
                        <p>{pizza.description}</p>
                    </div>
                    <label><input type="checkbox" defaultChecked={isVegan} disabled />&nbsp;Vegan&nbsp;</label>
                    <label><input type="checkbox" defaultChecked={isBio} disabled />&nbsp;Bio&nbsp;</label>
                    {/* <label>| Allergènes&nbsp;:&nbsp;{pizza.allergen}&nbsp;</label> */}
                    <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">
                            <i className="icon-basket" />Ajouter au panier
                        </button>
                    </div>
                </form>
            </div>
            <br/>
        </div>

    )
}

export default CatalogElement;