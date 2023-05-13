import React from "react";
import errorsInput from "../../utils/errorsinputs.js";
import Style from "./FormCreate.module.css";

const FormCreate = ({
  data,
  genres,
  platforms,
  handlerChange,
  handerSubmit,
  errors,
  checkBox,
}) => {
  return (
    <div className={Style.Container_Container_Container}>
      <form className={Style.container_Form}>
        <div>
          <label htmlFor="name" className={Style.container_Form_Title}>
            Name:{" "}
          </label>
          <br />
          <input
            style={errors.name ? errorsInput.failed : errorsInput.success}
            className={Style.container_Form_inputs}
            onChange={(e) => handlerChange(e)}
            placeholder="Name of Game"
            value={data.name}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="description" className={Style.container_Form_Title}>
            Description:{" "}
          </label>
          <br />
          <textarea
            style={
              errors.description
                ? errorsInput.failedDescription
                : errorsInput.successDescription
            }
            onChange={handlerChange}
            value={data.description}
            name="description"
            id="description"
            placeholder="description"
          ></textarea>
        </div>
        <div>
          <label htmlFor="URL" className={Style.container_Form_Title}>
            Image:{" "}
          </label>
          <br />
          <input
            style={errors.image ? errorsInput.failed : errorsInput.success}
            className={Style.container_Form_inputs}
            onChange={handlerChange}
            value={data.image}
            type="url"
            name="image"
            id="URL"
            placeholder="Writte URL"
          />
        </div>
        <div>
          <label htmlFor="released" className={Style.container_Form_Title}>
            released:{" "}
          </label>
          <br />
          <input
            style={
              data.released[0] === "d"
                ? errorsInput.failed
                : errorsInput.success
            }
            className={Style.container_Form_inputs}
            onChange={handlerChange}
            value={data.released}
            type="date"
            name="released"
            id="released"
          />
        </div>
        <div>
          <label htmlFor="rating" className={Style.container_Form_Title}>
            rating:{" "}
          </label>
          <br />
          <input
            style={
              data.rating < 0.01 ? errorsInput.failed : errorsInput.success
            }
            className={Style.container_Form_inputs}
            onChange={handlerChange}
            value={data.rating}
            type="number"
            name="rating"
            id="rating"
            placeholder="1.0"
            step="0.01"
            min="0"
            max="10"
          />
        </div>
        <div className={Style.container_Form_Container_Genres}>
          <label htmlFor="genres" className={Style.container_Form_Title}>
            genres
          </label>
          <br />
          <div
            style={errors.genres ? errorsInput.failed : errorsInput.success}
            className={Style.container_Form_container_checks}
          >
            {genres.map((pos) => {
              return (
                <div
                  className={Style.container_Form_container_checks_child}
                  key={pos.id}
                >
                  <input
                    onClick={handlerChange}
                    checked={checkBox}
                    type="checkbox"
                    name="genres"
                    value={pos.id}
                  />{" "}
                  {pos.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className={Style.container_Form_Container_Platforms}>
          <label htmlFor="plataforms" className={Style.container_Form_Title}>
            platforms
          </label>
          <br />
          <div
            style={errors.platforms ? errorsInput.failed : errorsInput.success}
            className={Style.container_Form_container_checks}
          >
            {platforms.map((pos) => {
              return (
                <div
                  className={Style.container_Form_container_checks_child}
                  key={pos.id}
                >
                  <input
                    onClick={handlerChange}
                    checked={checkBox}
                    type="checkbox"
                    name="platforms"
                    value={pos.name}
                  />{" "}
                  {pos.name}
                </div>
              );
            })}
          </div>
        </div>
        <button className={Style.container_Form_btn} onClick={handerSubmit}>
          Create Games
        </button>
      </form>
    </div>
  );
};

export default FormCreate;
