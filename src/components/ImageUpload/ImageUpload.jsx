import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  input: {
    display: 'none'
  },
  img: {
    width: 200,
    height: 256,
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }
});

class ImageUploadCard extends React.Component {
  constructor(props) {
    super(props);
  }

  handleUploadClick = e => {
    const { setImage } = this.props;

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      setImage(reader.result);
    }.bind(this);
  };

  render() {
    const { image, setImage } = this.props;

    return (
      <div>
        {image && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={image}
            />
            <br />
            <button onClick={() => setImage(null)}>Remove</button>
          </div>
        )}

        <input
          type="file"
          name="myImage"
          onChange={this.handleUploadClick}
        />
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ImageUploadCard);
