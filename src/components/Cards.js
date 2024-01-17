import React, { useEffect } from 'react';
import Card from './Card';
import { toast } from 'react-toastify';

function Cards({ WholeCourseData, category }) {

    console.log("CourseData:");


    useEffect(() => {
        if (category !== "All" && !WholeCourseData[0].data[category]) {
            toast.error(`${category} not found.`, { autoClose: 1000 });
        }
        else {
            toast.success(`${category} is here`, { autoClose: 1000 });
        }
    }, [category, WholeCourseData]);


    function getCourses() {


        if (category === "All") {
            let allCourses = [];

            WholeCourseData.forEach((category) => {

                Object.values(category.data).forEach((courses) => {
                    courses.forEach((course) => {

                        allCourses.push(course);

                    });
                });
            });

            return allCourses;
        }
        else {
            const selectedCategory = WholeCourseData[0].data[category];
            return selectedCategory || [];
        }


    }

    return (
        <div>

            <h3 className='category-heading'>{category}</h3>

            <div className='card-bigbox'>


                {getCourses().map((videoData) => (
                    <Card key={videoData.id} videoData={videoData} />
                ))}
            </div>
        </div>

    );
}

export default Cards;
