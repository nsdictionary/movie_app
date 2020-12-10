import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const location = this.props.location;
    const { year, title, summary, poster, genres } = location.state;
    if (location.state) {
      // return <span>{location.state.title}</span>;
      return (
        <span>
          <img src={poster} alt={title} title={title} />
          <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{summary}</p>
          </div>
        </span>
      );
    } else {
      return null;
    }
  }
}	

export default Detail;