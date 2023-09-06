import React, { useState } from "react";
import "./profileEdit.scss";
import { useDispatch, useSelector } from "react-redux";
import pencil from "/pencil.svg";
import language from "/language.svg";
import { useNavigate } from "react-router";
import { firebaseDB } from "../../firebase/config";
import { doc, updateDoc } from "@firebase/firestore";
import Swal from "sweetalert2";
import fileUpload from "../../service/fileUpload";
const ProfileEdit = () => {
  const prods = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const imagenPerfil = prods.photoURL;
  const [fotoURL, setfotoURL] = useState(prods.photoURL);
  const [displayName, setDisplayName] = useState(prods.displayName);
  const [phone, setPhone] = useState(prods.phone);
  const [email, setEmail] = useState(prods.email);
  const [birthDate, setBirthDate] = useState(prods.birthDate);
  const [isEditingDisplayName, setIsEditingDisplayName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingBirthDate, setIsEditingBirthDate] = useState(false);
  const [isEditingFoto, setIsEditingFoto] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSave = async () => {
    try {
      const userDocRef = doc(firebaseDB, "usuarios", prods.uid); //obtengo el documento

      // para actualizar los datos del documento
      await updateDoc(userDocRef, {
        displayName: displayName,
        phone: phone,
        email: email,
        birthDate: birthDate,
        photoURL: selectedImage || fotoURL,
      });

      Swal.fire(
        "Excelente!",
        "Los datos fueron actualizados correctamente",
        "success"
      );
      setIsEditingDisplayName(false);
      setIsEditingPhone(false);
      setIsEditingEmail(false);
      setIsEditingBirthDate(false);
      setIsEditingFoto(false);
    } catch (error) {
      Swal.fire("Oops!", "Los datos no se pudieron actualizar", "error");
      // console.error('Error al actualizar datos: ',  error);
    }
  };

  const handleImageUpload = async (file) => {
    try {
      const imageUrl = await fileUpload(file);
      if (imageUrl) {
        setSelectedImage(imageUrl);
      } else {
        console.error("Error al cargar la imagen en Cloudinary");
      }
    } catch (error) {
      console.error("Error al cargar la imagen: ", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => navigate(-1)}
      >
        Atras
      </button>

      <h2>Perfil</h2>

      {/* <div className="figure">
      <img src={imagenPerfil} alt="" />
    </div> */}
      {selectedImage ? (
        <figure className="figure">
          <img src={selectedImage} alt="" />
        </figure>
      ) : (
        <figure className="figure" onClick={() => setIsEditingFoto(true)}>
          <img src={fotoURL} alt="" />
        </figure>
      )}
{/* //!selectedImage no se ha seleccionado una foto*/}
      {isEditingFoto && !selectedImage && (
        <div>
          <input
            type="file"
            onChange={(e) => handleImageUpload(e.target.files[0])}
          />
          <button onClick={() => setIsEditingFoto(false)}>Cancelar</button>
          <button onClick={() => setSelectedImage(fotoURL)}>Aceptar</button>
        </div>
      )}

      <div className="user-profile">
        <div className="profile-info">
          <span className="edit-account">
            {isEditingDisplayName ? (
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            ) : (
              <span>{displayName}</span>
            )}
          </span>
          <img
            className="arrow-icon"
            src={pencil}
            alt=""
            onClick={() => setIsEditingDisplayName(!isEditingDisplayName)}
          />
        </div>
      </div>

      <div className="user-profile">
        <div className="profile-info">
          <span className="edit-account">
            {isEditingPhone ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <span>{phone}</span>
            )}
          </span>
          <img
            className="arrow-icon"
            src={pencil}
            alt="Icono de Flecha"
            onClick={() => setIsEditingPhone(!isEditingPhone)}
          />
        </div>
      </div>

      <div className="user-profile">
        <div className="profile-info">
          <span className="edit-account">
            {isEditingEmail ? (
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span>{email}</span>
            )}
          </span>
          <img
            className="arrow-icon"
            src={pencil}
            alt="Icono de Flecha"
            onClick={() => setIsEditingEmail(!isEditingEmail)}
          />
        </div>
      </div>

      <div className="user-profile">
        <div className="profile-info">
          <span className="edit-account">
            {isEditingBirthDate ? (
              <input
                type="text"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            ) : (
              <span>{birthDate}</span>
            )}
          </span>
          <img
            className="arrow-icon"
            src={pencil}
            alt="Icono de Flecha"
            onClick={() => setIsEditingBirthDate(!isEditingBirthDate)}
          />
        </div>
      </div>

      <button type="button" className="btn btn-warning " onClick={handleSave}>
        Guardar
      </button>
    </>
  );
};

export default ProfileEdit;
