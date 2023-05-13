import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import FormCreate from "../components/Forrm/FormCreate";
import Nav from "../components/Nav/Nav";
import { platforms } from "../utils/platforms";
import validate from "../utils/validate";

const Form = () => {
  const genres = useSelector((state) => state.genres);
  const [checkBox, setCheckBox] = useState(null);
  const [errors, setErrors] = useState({
    name: " ",
    description: " ",
    image: " ",
    released: "dd/mm/aaaa",
    rating: 0.0,
    genres: [],
    platforms: [],
  });
  const [dataForm, setDataForm] = useState({
    name: " ",
    description: " ",
    image: " ",
    released: "dd/mm/aaaa",
    rating: 0.0,
    genres: [],
    platforms: [],
  });

  const handlerChange = (e) => {
    const { name, value } = e.target;

    setErrors(
      validate({
        ...dataForm,
        [name]: value,
      })
    );

    const { genres, platforms } = dataForm;
    if (name === "genres") {
      if (!genres.some((p) => p === value)) {
        return setDataForm({ ...dataForm, [name]: [...genres, value] });
      }
      const valueFiltered = genres.filter((p) => p !== value);
      return setDataForm({ ...dataForm, [name]: [...valueFiltered] });
    }
    if (name === "platforms") {
      if (!platforms.some((p) => p === value)) {
        return setDataForm({ ...dataForm, [name]: [...platforms, value] });
      }
      const valueFiltered = platforms.filter((p) => p !== value);
      return setDataForm({ ...dataForm, [name]: [...valueFiltered] });
    }
    setDataForm({ ...dataForm, [name]: value });
  };

  const handerSubmit = async (e) => {
    e.preventDefault();

    if (
      !errors.image &&
      !errors.description &&
      !errors.name &&
      !errors.released &&
      !errors.rating &&
      !errors.platforms &&
      !errors.genres &&
      dataForm.platforms.length > 0 &&
      dataForm.genres.length > 0 
    ) {
      alert("juego creado!!");
      await axios.post("http://localhost:3001/videogames", dataForm);
      setCheckBox(false);
      setCheckBox(null);

      setDataForm({
        ...dataForm,
        name: " ",
        description: " ",
        image: " ",
        released: "dd/mm/aaaa",
        rating: 0.0,
        genres: [],
        platforms: [],
      });
      setErrors({
        ...dataForm,
        name: " ",
        description: " ",
        image: " ",
        released: "dd/mm/aaaa",
        rating: 0.0,
        genres: [],
        platforms: [],
      });
    } else {
      alert(`Seguro que te saltaste algo!`);
    }
  };

  return (
    <div>
      <Nav />
      {genres.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <FormCreate
          data={dataForm}
          genres={genres}
          platforms={platforms}
          handerSubmit={handerSubmit}
          handlerChange={handlerChange}
          errors={errors}
          checkBox={checkBox}
        />
      )}
    </div>
  );
};

export default Form;
