import React, { useContext } from 'react';
import { Image, OverlayTrigger, Popover } from 'react-bootstrap';
import { AppContext } from '../../context/context.jsx';

const BookClubItem = ({ current, placement }) => {
  const { getClubById } = useContext(AppContext);

  const handleClicked = () => {
    getClubById(current._id);
  };

  return (
    <OverlayTrigger
      key={current._id}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-bookclub`}>
          <Popover.Title as='h3'>{current.name}</Popover.Title>
          <Popover.Content
            style={{
              maxHeight: '96px',
              overflow: 'hidden',
              whiteSpace: 'pre',
              textOverflow: 'ellipsis'
            }}
          >
            {current.description}
          </Popover.Content>
        </Popover>
      }
    >
      <Image src={current.thumbnail || ''} rounded fluid onClick={handleClicked} />
    </OverlayTrigger>
  );
};

export default BookClubItem;
