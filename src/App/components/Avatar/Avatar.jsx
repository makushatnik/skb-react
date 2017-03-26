import React from 'react';
import cn from 'classnames';
import importcss from 'importcss';
import Component from 'lsk-general/General/Component';

@importcss(require('./Avatar.css'))
export default class Avatar extends Component {
  render() {
  	var image = this.props.src || '',
  		badge = this.props.badge || '',
  		filters = this.props.filters || '',
  		shadow = this.props.shadow || 0,//1 - enabled, 0 - disabled
  		border = this.props.border || 0,//1 - enabled, 0 - disabled
  		borderColor = this.props.borderColor || '#fff',
  		borderRadius = this.props.borderRadius,
      borderWidth = this.props.borderWidth,
  		classNames = cn({
        profile: true,
        bordered: border ? true : false,
        noImage: image ? true : false,
        shadowed: shadow ? true : false,
        circleBadge: badge === 'circleBadge'
      }),
  		style = {};
    console.log('Avatar.render');
    //console.log(badge === 'circleBadge');
    if (!image) {
  		image = '';
  	}
  	if (border) {
  		if (borderColor) {
  		  style.borderColor = borderColor;
      }
      if (borderRadius) {
        style.borderRadius = borderRadius;
      }
      if (borderWidth) {
        style.borderWidth = borderWidth;
      }
  	}
  	if (filters) {
  		style.filter = filters;
  	}
  	image = <img src={image}
  				alt='profile-image'
  				title={this.props.title}
  				styleName={classNames}
  				style={style} />;
    return (
      <div class='photo'>
      	{image}
      </div>
    );
  }
}