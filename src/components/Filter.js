import React from 'react'


export default function Filter({ filteredData,category,setCategory}) {
    
    
    function filterHandler(title)
    {
        setCategory(title);
    }
    return (
        <div>
            <h1>Filters</h1>
            <div className="row">
                {filteredData.map((filter) => (
                    <div className="filter_row" key={filter.id}>
                        <button className={`filterBtn ${category === filter.title ? 'filterBtn-high': ''}`} 
                         onClick={()=>filterHandler(filter.title)
                        
                         }>
                            {filter.title}</button>
                    </div>

                ))
                } </div>

    

        </div>
    )
}
