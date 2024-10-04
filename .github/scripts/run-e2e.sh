#!/bin/bash

set -e
set -o pipefail

export DATE=$(date +%F)

usage(){
	local argument
	argument=$(basename "$0")

	cat >&2 <<-EOF
	${argument} argument
    example: $(basename "$0") e2e_test
	EOF
	exit 1
}

main() {
    local cmd=$1

    if [[ -z "$cmd" ]]; then
        usage
        exit 1
    fi
    mkdir config
    npm install
    npx cypress install
    npm run $cmd
}

main "$@"