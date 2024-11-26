import { useEffect, useState } from "preact/hooks";
import { Checkbox } from "primereact/checkbox";
import './index.scss';
import { useParams } from "react-router-dom";

interface ChildData {
  id: string; // Unique ID for each child
  name: string;
  children?: ChildData[];
  access: Permission;
}

interface Permission {
  create: boolean;
  view: boolean;
  update: boolean;
  delete: boolean;
  import: boolean;
  export: boolean;
}

interface ChildCheckedState {
  id: string;
  permissions: Permission;
}

interface PrimaryTemplateFormProps {
  childrenData: ChildData[];
  labels: Array<keyof Permission>; // Ensure labels are of type keyof Permission
  onGetFinalList: (finalList: any[]) => void; // Callback for final list
  uniqueKey: string;
  finalList: any[];
  localKeys: any[];
}

const PrimaryTemplateForm = ({ childrenData, labels, onGetFinalList, uniqueKey, finalList, localKeys }: PrimaryTemplateFormProps) => {
  const { action } = useParams();
  const initialChildCheckedStates: ChildCheckedState[][] = childrenData.map(dat =>
    dat.children ? dat.children.map(child => ({
      id: child.id,
      permissions: { ...child.access }
    })) : [{
      id: dat.id,
      permissions: { ...dat.access }
    }]
  );
  const [childCheckedStates, setChildCheckedStates] = useState<ChildCheckedState[][]>(() => {
    const savedStates = sessionStorage.getItem(`childCheckedStates${uniqueKey}`);
    return savedStates ? JSON.parse(savedStates) : initialChildCheckedStates;
  });

  useEffect(() => {
    if (action != "view") {
      sessionStorage.setItem(`childCheckedStates${uniqueKey}`, JSON.stringify(childCheckedStates));
      if (!localKeys?.includes(`childCheckedStates${uniqueKey}`)) {
        localKeys.push(`childCheckedStates${uniqueKey}`)
      }
    }
  }, [childCheckedStates]);

  const handleChildCheckboxChange = (parentIndex: number, childIndex: number, label: keyof Permission, objectKey: string) => {
    const newChildCheckedStates = [...childCheckedStates];
    newChildCheckedStates[parentIndex][childIndex].permissions[label] = !newChildCheckedStates[parentIndex][childIndex].permissions[label];
    setChildCheckedStates(newChildCheckedStates);
    const list = newChildCheckedStates.flat();
    const finalEditList = list?.map((item) => ({ [item.id]: item?.permissions }));
    const foundObject = finalEditList.find(item => Object.keys(item)[0] == objectKey);
    const keyExists = finalList.some((item) => item.hasOwnProperty(objectKey));
    if (keyExists) {
      const updatedFinalList = finalList.map((item) => {
        if (item.hasOwnProperty(objectKey)) {
          return foundObject;
        }
        return item;
      });

      onGetFinalList(updatedFinalList)

    } else {
      onGetFinalList([...finalList, foundObject])
    }
  };


  return (
    <div className="overall_accordian_content">
      {childrenData.map((dat, parentIndex) => {
        if (dat?.children) {
          return (
            <div key={dat.id} className={"cardwise_layout"}>
              <div className="subheader_layout">{dat.name}</div>
              {dat.children && (
                <div className="grid ml-6 mb-4">
                  <div className="col-12 md:col-6 lg:col-6">Select</div>
                  <div className="col-12 md:col-6 lg:col-6">
                    <div className="checkbox_layout">
                      {labels.map(label => (
                        <div className={"header_overlayout"} key={label}>
                          <label>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {dat.children?.map((childData, childIndex) => (
                <div className="grid ml-6" key={childData.id}>
                  <div className="col-12 md:col-6 lg:col-6">
                    <div>{childData.name}</div>
                  </div>
                  <div className="col-12 md:col-6 lg:col-6">
                    <div className="checkbox_layout">
                      {labels.map(label => (
                        <div className={"header_overlayout"} key={label}>
                          <Checkbox
                            disabled={action === "view"}
                            onChange={() => handleChildCheckboxChange(parentIndex, childIndex, label, childData?.id)}
                            checked={childCheckedStates[parentIndex]?.[childIndex]?.permissions[label] || false}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        } else {
          const childIndex = parseInt(dat?.id)
          return (
            <div key={dat.id} className={"cardwise_layout"}>
              <div className="subheader_layout">{dat.name}</div>
              {/* {dat.children && ( */}
              <div className="grid ml-6 mb-2">
                <div className="col-12 md:col-6 lg:col-6">Select</div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="checkbox_layout">
                    {labels.map(label => (
                      <div className={"header_overlayout"} key={label}>
                        <label>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* )} */}
              {/* {dat.children?.map((childData, childIndex) => ( */}
              <div className="grid ml-6" key={""}>
                <div className="col-12 md:col-6 lg:col-6">
                  <div>{dat.name}</div>
                </div>
                <div className="col-12 md:col-6 lg:col-6">
                  <div className="checkbox_layout">
                    {labels.map(label => (
                      <div className={"header_overlayout"} key={label}>
                        <Checkbox
                          disabled={action === "view"}
                          // onChange={() => { }}
                          // checked={false}
                          onChange={() => handleChildCheckboxChange(parentIndex, 0, label, dat?.id)}
                          checked={childCheckedStates[parentIndex]?.[0]?.permissions[label] || false}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* ))} */}
            </div>
          )
        }
      })}
    </div>
  );
};

export default PrimaryTemplateForm;
