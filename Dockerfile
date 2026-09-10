# nginx-unprivileged rather than nginx: runs as uid 101 and writes its caches under /tmp, so the
# pod can keep the cluster's restricted securityContext instead of needing root to bind :80.
FROM nginxinc/nginx-unprivileged:1.31-alpine@sha256:aa8c9087d36d93e9d650c5365f883b421e8214aedbad24ade52b844c583358f1

# out/ is built on the runner, not here, so one build serves both architectures.
COPY out/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
