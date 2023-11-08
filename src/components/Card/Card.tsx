import { SiWhatsapp } from 'react-icons/si';
import { ImHeart, ImBlocked, ImPencil } from 'react-icons/im';
import './Card.css';
import { ContactType } from '../../hooks/useContacts';
import { Link } from 'react-router-dom';

type CardType = {
  contact: ContactType;
  editContact: (contact: ContactType) => void;
};

function Card({ contact, editContact }: CardType) {
  const { avatar, email, name, whatsApp, favorite, status, id } = contact;

  return (
    <div className="card">
      <img
        className="avatar"
        src={`http://localhost:3000/${avatar}`}
        alt="teste"
      />
      <h3 className="title">{name}</h3>
      <a className="link" href={`mailto:${email}`}>
        {email}
      </a>
      <a
        target="_blank"
        className="btn-whatsapp"
        href={`https://api.whatsapp.com/send?phone=55${whatsApp}`}
      >
        <SiWhatsapp className="icon" />
        <span>WhatsApp</span>
      </a>
      <div className="actions">
        <button
          onClick={() => editContact({ ...contact, favorite: !favorite })}
          className={`btn-icon btn-favorite ${
            favorite ? 'btn-favorite__active' : ''
          }`}
        >
          <ImHeart />
        </button>
        <button
          onClick={() =>
            editContact({
              ...contact,
              status: status === 'BLOCKED' ? 'ACTIVE' : 'BLOCKED',
            })
          }
          className={`btn-icon btn-block ${
            status === 'BLOCKED' ? 'btn-block__active' : ''
          }`}
        >
          <ImBlocked />
        </button>
        <Link to={`contact/edit/${id}`} className="btn-icon  btn-edit">
          <ImPencil />
        </Link>
      </div>
    </div>
  );
}

export default Card;
