set -exo pipefail
yarn
yarn build
image=netless.link
version=1.0.0
namespace=site
deploymentName=netless-link-beta
hash=$(git rev-parse --short HEAD)

docker build -f Dockerfile -t registry-dev.netless.link/app/$image:$version-$hash -t registry-dev.netless.link/app/$image:latest .
docker push registry-dev.netless.link/app/$image:$version-$hash
docker push registry-dev.netless.link/app/$image:latest
sleep 60
ssh k8s-company-dev -tt "kubectl patch deployment $deploymentName -n $namespace --patch '{\"spec\": {\"template\": {\"metadata\": {\"annotations\": {\"version\": \"$version-$hash\"}}}}}'"
