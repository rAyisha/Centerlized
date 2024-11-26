import './index.scss'
import Button from '../../../../../../components/Button'
import SvgAddIcon from '../../../../../../assets/svgIcon/SvgAddIcon'
import ExamResultViewTable from './examResultViewTable'

const ExamResultsView = () => {
    return (
        <div className="exam_results_view">
            <div className="totalcount_headerstudent mb-4">
                <div className="profile__tab__headertxt mb-4">Exam Result</div>
            </div>
            <ExamResultViewTable/>
        </div>
    )
}

export default ExamResultsView