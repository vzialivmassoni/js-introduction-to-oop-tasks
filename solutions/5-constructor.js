function Point(x, y) {
  this.x = x;
  this.y = y;

  this.getX = () => this.x;
  this.getY = () => this.y;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;

  this.getBeginPoint = () => this.beginPoint;
  this.getEndPoint = () => this.endPoint;
}

const reverse = (segment) => {
  const begin = segment.getBeginPoint();
  const end = segment.getEndPoint();

  const newBeginPoint = new Point(end.getX(), end.getY());
  const newEndPoint = new Point(begin.getX(), begin.getY());

  return new Segment(newBeginPoint, newEndPoint);
};

export { Point, Segment, reverse };