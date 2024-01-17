
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import Cards from './Cards'
import { filterData } from '../FilterData';
import { CourseData } from '../CourseData';

export default function FilterHome() {

    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category,setCategory] = useState(filterData[0].title);

    useEffect(() => {
        setCourses(CourseData);
        setLoading(false);
        
    }, [])
    console.log(courses);
    


    return (
        <div className='filterHome'>
            <h1 className="py-4">FilterHome</h1>

            <div className='filter'
            >
                <Filter filteredData={filterData} category={category} setCategory={setCategory}/>
            </div>
            <div className="card">
                {
                    loading ? (
                        <h1>Loading..</h1>
                    ) : (<Cards WholeCourseData={courses} category = {category} />)
                }
                


            </div>


        </div>
    )
}

