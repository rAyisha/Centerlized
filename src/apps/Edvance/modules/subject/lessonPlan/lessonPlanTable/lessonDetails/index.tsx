import React from 'react';
import './index.scss';

interface Topic {
    name: string;
    completionDate: string;
    status: string;
}

interface LessonDetailsProps {
    staffName: string;
    lessonName: string;
    topics: Topic[];
    setVisible: any;
}

const LessonDetails: React.FC<LessonDetailsProps> = ({ setVisible, staffName, lessonName, topics }) => {

    return (
        <div className="lesson-details">
            <div className="lesson-info">
                <p><strong>Staff Name:</strong> {staffName}</p>
                <p><strong>Lesson:</strong> {lessonName}</p>
            </div>

            <div className="topics-section">
                <h3>Topics:</h3>
                {topics.map((topic, index) => (
                    <div key={index} className="topic">
                        <div> ● </div>
                        <ul>
                            <li><strong>Topic:</strong> {topic.name}</li>
                            <li><strong>Completion Date:</strong> {topic.completionDate}</li>
                            <li><strong>Status:</strong> {topic.status}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LessonDetails;
