# ADR-001: Use Django as the Backend Framework

## Status

Accepted

## Context

Paws & Swipe requires authentication, authorization, relational data, administration tools, REST APIs, and domain-specific business rules.

The project is also intended to demonstrate full-stack engineering concepts rather than relying primarily on Backend-as-a-Service abstractions.

## Decision

Use Django with Django REST Framework as the backend application framework.

## Reasons

- Mature authentication and authorization ecosystem
- Django ORM
- Built-in administration interface
- Strong PostgreSQL integration
- Django REST Framework ecosystem
- Suitable for a modular monolith architecture
- Enables explicit implementation of backend business rules

## Alternatives Considered

### Node.js

Node.js would provide strong TypeScript integration across the stack, but would require assembling more backend infrastructure.

### Supabase

Supabase would allow faster initial development but would abstract several backend concepts that this project intends to explore and demonstrate.

## Consequences

The repository will contain both TypeScript and Python environments.

Frontend clients will communicate with the Django backend through an HTTP API.