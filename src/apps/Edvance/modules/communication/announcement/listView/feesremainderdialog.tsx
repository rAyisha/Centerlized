import SvgCalendar from "../../../../../../assets/svgIcon/SvgCalendar";

const Feesremainderdialog = () => {

  return (
    <div className="overall__feesremainderdialog">
      {/* <div className="head__feesremainderdialog">Dear parents,</div> */}
      <div className="content__feesremainderdialog"></div>

      <div className="grid mt-4">
        <div className="col-12 md:col-6 lg:col-6 flexcenter__content">
          <div>
            <SvgCalendar color="#292D32" />
          </div>
          <div>Publish Date: </div>
        </div>
        <div className="col-12 md:col-6 lg:col-6 flexcenter__content">
          <div>
            <SvgCalendar color="#292D32" />
          </div>
          <div>Notice Date: </div>
        </div>

      </div>
      <hr />
      <div className="head__feesremainderdialog">Message To</div>
      {[].map((data) => (
        <div className="subhead__feesremainderdialog">{data}</div>
      ))}
    </div>
  );
};

export default Feesremainderdialog;
