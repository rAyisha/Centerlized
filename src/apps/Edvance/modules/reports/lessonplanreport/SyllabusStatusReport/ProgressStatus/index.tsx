import React from 'preact'
import ProgressBarcomponet from '../../../../../components/ProgressBarcomponent'
import "./index.scss"
import { detail } from './mock'

const ProgressStatus = () => {
  return (
    <div className="syllabus__progress__view">
       <div className="mt-4 mb-5 ">
        <div className="syllabus__status__report__progress__bar  ">
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#34B3F1"}
              label={"English (210)"}
              value={60}
            />
          </div>
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#9AE66E"}
              label={"Hindi (230)"}
              value={90}
            />
          </div>
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#9667F7"}
              label={"Mathematics (110)"}
              value={70}
            />
          </div>
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#FCB900"}
              label={"Science (111)"}
              value={30}
            />
          </div>
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#65B2FC"}
              label={"French (231)"}
              value={20}
            />
          </div>
        </div>
        <div className="syllabus__status__report__progress__bar mt-4 ">
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#2ACCCB"}
              label={"Drawing (200)"}
              value={30}
            />
          </div>
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#2A3ACC"}
              label={"Computer (00220)"}
              value={40}
            />
          </div>
          <div className="syllabus__status__report__progress__bar__style">
            <ProgressBarcomponet
              color={"#CA3EED"}
              label={"Elective 1 (101)"}
              value={80}
            />
          </div>
          <div className="syllabus__status__report__progress__bar__style"></div>
          <div className="syllabus__status__report__progress__bar__style"></div>
        </div>
      </div>
      <hr />
      <div className="mt-4 mb-4">
        <div className="syllabus__status__report__subtitle mt-2">
          Note : Subject Percentage Based On Topic.
        </div>
        <div className="syllabus__status__report__subtitle mt-2">
          Subject - Lesson - Topic Status
        </div>
      </div>
      <hr />
      {detail.map((item) => {
        return (
          <div>
            <div className="table__data mt-4">
              <div className="table__data__title">{item.name}</div>
              <div className="table__data__value">{item.value}</div>
            </div>
            {item.loop.map((item) => {
              return (
                <div>
                  <div className="table__data__sub mt-4">
                    <div className="table__data__title__sub">{item.title}</div>
                    <div className="table__data__title__sub">{item.value}</div>
                  </div>
                  {item.innerloop.map((item) => {
                    return (
                      <div className="table__data__sub__menu mt-2">
                        <div className="table__data__title__sub">
                          {item.title}
                        </div>
                        <div className="table__data__title__sub">
                          {item.value}
                        </div>
                      </div>
                    );
                  })}
                  <hr />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  )
}

export default ProgressStatus
