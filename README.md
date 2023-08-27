
# Resident Registration

## Prerequisites

- Ensure you have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

## Installation & Running with Docker

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/i-bajrai/resparke
   cd resparke
   ```

2. **Build and Start the Services**:
   ```bash
   docker-compose up --build
   ```

3. Access the Angular app at `http://localhost:4200` and the backend server at `http://localhost:3000`.

## Seed database

To add records to the MongoDB:

`docker exec -it  resident-registration-server-1 npm run seed`

## Accessing Emails (MailHog)

During development, we use MailHog to capture and view emails sent by the application. 

### How to Access Email WebUI

1. **Start the services**: Ensure your Docker services are running.

2. **View emails in the MailHog web UI**: Once the application is running and has sent emails, you can view them by navigating to the MailHog web interface:
   [MailHog Web UI](http://localhost:8025)

This provides a simple and easy way to view and test email functionality during development without actually sending emails to real inboxes.
