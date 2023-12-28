import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';

import ImageUpload from '../../../components/ImageUpload';
import DialogBox from '../../../components/DialogBox';
import Loader from '../../../components/Loader';
import request, { API_METHOD, ENDPOINTS } from '../../../libs/request';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [deleteImage, setDeleteImage] = useState('');
  const [deleteLoader, setDeleteLoader] = useState(false);

  useEffect(() => {
    const fetchAllUsers = () => {
      request(API_METHOD.get, ENDPOINTS.fetchImage.replace(':type', 'gallery'))
        .then((res) => setGallery(res))
        .catch((err) => console.error(err))
    };

    fetchAllUsers();
  }, []);

  const uploadImage = () => {
    setIsLoading(true);
    const form = new FormData();
    form.append('type', 'gallery');
    form.append('image', image);

    request(API_METHOD.post, ENDPOINTS.uploadImage, { data: form })
      .then((res) => {
        setImage('');
        setGallery((prevGallery) => [...prevGallery, res]);
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const closeDeleteModal = () => {
    setIsDialogOpen(false);
    setDeleteImage('');
  };

  const removeImage = () => {
    setDeleteLoader(true);
    request(API_METHOD.delete, ENDPOINTS.removeImage.replace(':id', deleteImage))
      .then(() => {
        const restGallery = gallery.filter((i) => i.originalId !== deleteImage);
        setGallery(restGallery);
        closeDeleteModal();
      })
      .catch((err) => console.error(err))
      .finally(() => setDeleteLoader(false));
  };

  return (
    <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
      <ImageUpload image={image} setImage={setImage} />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          disabled={!image}
          onClick={() => uploadImage()}
          startIcon={isLoading ? <Loader /> : null}
        >
          Upload Image
        </Button>
      </div>

      <Typography>Gallery Images</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align='center'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gallery.map((gallery) => (
              <TableRow key={gallery.originalId}>
                <TableCell>
                  <img
                    alt="ProfileImage"
                    width={"250px"}
                    src={gallery.imageURL}
                  />
                </TableCell>
                <TableCell align='center'>
                  <DeleteIcon
                    color="error"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setIsDialogOpen(true);
                      setDeleteImage(gallery.originalId);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DialogBox
        open={isDialogOpen}
        title="Delete Gallery Image"
        content={`Do you really want to remove image? This action can't undo.`}
        agreeButtonLabel="Delete Image"
        disagreeButtonLabel="Cancel"
        agreeButtonAction={() => removeImage()}
        disagreeButtonAction={() => setIsDialogOpen(false)}
        disableAgreeButton={!deleteImage || deleteLoader}
        disableDisagreeButton={false}
        isDeleteModal
        disableButtonColor="ternary"
      />
    </AccordionDetails>
  );
};

export default Gallery;
