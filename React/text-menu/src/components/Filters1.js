import React, { useState } from 'react'
import FilterResults from 'react-filter-search';

function Filters1() {

    const [data, setData] = useState([
        {
            name: "jitin",
            age: 15
        },
        {
            name: "mohit",
            age: 78
        }
    ])

    const [value, setValue] = useState("")

    const handleChange = event => {
        const { value } = event.target;
        setValue(value)
    };

    return (
        <>
            <div>
                <input type="text" value={value} onChange={handleChange} />
                <FilterResults
                    value={value}
                    data={data}
                    renderResults={results => (
                        <div>
                            {results.map(el => (
                                <div>
                                    <span>{el.name}</span>
                                    <span>{el.age}</span>
                                </div>
                            ))}
                        </div>
                    )}
                />
            </div>
        </>
    )
}

export default Filters1