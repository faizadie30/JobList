import React, { useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getListJobs, jobSelector } from '../../app/Job/JobSlice';
import List from '../../Components/List/List';

function JobList() {
  const dispatch = useDispatch();
  const { data } = useSelector(jobSelector);

  useEffect(() => {
    const params = {
      page: '1',
    };

    dispatch(getListJobs(params));
  }, []);

  return (
    <>
      <Container fluid className="px-3 mt-4">
        <form className="row align-items-center gx-3 gy-2">
          <div className="col-4">
            <label htmlFor="autoSizingInput">Job Description</label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Filter by title, benefit, companies"
            />
          </div>
          <div className="col-4">
            <label htmlFor="autoSizingInput">Location</label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Filter by city, state, zip code or contry"
            />
          </div>
          <div className="col-2">
            <label htmlFor="autoSizingInput"></label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Full Time Only
              </label>
            </div>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-secondary mb-0 mt-3">
              Search
            </button>
          </div>
        </form>
        <Card className="mt-3">
          <Card.Header>
            <h3 className="fw-bold text-dark mx-3">Job List</h3>
          </Card.Header>
          <Card.Body>
            {/* <List /> */}
            {data.map((value, key) => {
              return (
                <List key={key}>
                  <div className="me-auto text-start">
                    <div className="fw-bold">{value.title}</div>
                    <p className="mb-0 fw-normal text-muted">
                      {value.company} <span className="ms-1">-</span>{' '}
                      <span className="ms-1">{value.type}</span>
                    </p>
                  </div>
                  <div className="text-end">
                    <div className="fw-bold">{value.location}</div>
                    <p className="mb-0 fw-normal text-muted">
                      {value.created_at}
                    </p>
                  </div>
                </List>
              );
            })}
            {/* <List>
              <div className="me-auto text-start">
                <div className="fw-bold">Data Engineering</div>
                <p className="mb-0 fw-normal text-muted">
                  Trade Republic <span className="ms-1">-</span>{' '}
                  <span className="ms-1">Hallo</span>
                </p>
              </div>
              <div className="text-end">
                <div className="fw-bold">Berlin</div>
                <p className="mb-0 fw-normal text-muted">1 day ago</p>
              </div>
            </List> */}
            <div className="d-grid gap-1 px-2 mt-3">
              <Button variant="primary" size="md">
                More jobs
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default JobList;
