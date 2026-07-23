# Hybrid 310 website

Static bilingual website for Hybrid 310 in Hawthorne, California.

## Publish with Netlify

1. Create a new empty GitHub repository.
2. Push this local repository to GitHub.
3. In Netlify, choose **Add new project → Import an existing project**.
4. Select GitHub and choose the repository.
5. Netlify will read `netlify.toml`. No build command is required and the publish directory is `.`.
6. Select **Deploy**.

## Domain setup

After the first deployment, open **Domain management** in Netlify and add `hybrid310.com`. Follow Netlify's displayed DNS instructions at the domain registrar.

## Appointment form

The appointment form currently submits through FormSubmit to `service@hybrid310.com`. FormSubmit may send an activation email after the first submission; that email must be confirmed before messages are delivered.

