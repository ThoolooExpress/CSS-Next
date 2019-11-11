#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

FROM ruby:2

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# This Dockerfile adds a non-root 'vscode' user with sudo access. However, for Linux,
# this user's GID/UID must match your local user UID/GID to avoid permission issues
# with bind mounts. Update USER_UID / USER_GID if yours is not 1000. See
# https://aka.ms/vscode-remote/containers/non-root-user for details.
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Configure apt and install packages
RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    # Verify git, process tools installed
    && apt-get -y install git iproute2 procps lsb-release \
    #
    # Install ruby-debug-ide and debase
    && gem install ruby-debug-ide \
    && gem install debase \
    #
    # Create a non-root user to use if preferred - see https://aka.ms/vscode-remote/containers/non-root-user.
    && groupadd --gid $USER_GID $USERNAME \
    && useradd -s /bin/bash --uid $USER_UID --gid $USER_GID -m $USERNAME \
    # [Optional] Add sudo support for the non-root user
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME\
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    #
    # Clean up
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* \
    # Install Deps
    && gem install bundler jekyll

RUN echo 'deb http://download.opensuse.org/repositories/shells:/fish:/release:/3/Debian_9.0/ /' > /etc/apt/sources.list.d/shells:fish:release:3.list
RUN wget -nv https://download.opensuse.org/repositories/shells:fish:release:3/Debian_9.0/Release.key -O Release.key
RUN apt-key add - < Release.key
RUN apt-get update
RUN apt-get install fish -y

# Set up fish config
WORKDIR /home/vscode/.config/fish
RUN wget https://gist.githubusercontent.com/ThoolooExpress/e78e30ea9384fb833ed9defc269f04f1/raw/74b6f3c342db7552afba1ca48ccb5e56fd20dacd/config.fish

# SSH-Agent fix

RUN echo "\neval (ssh-agent -c)" >> /home/vscode/.config/fish/config.fish
RUN echo "\nssh-add ~/.ssh/id_rsa" >> /home/vscode/.config/fish/config.fish

# Add variable file
# RUN touch /home/vscode/.config/fish/fish_variables
# Fix permissions
RUN chown -R $USERNAME:$USERNAME /home/$USER

# Set XDG_CONFIG_HOME to avoid weird fish issues

RUN echo "\nset-x XDG_CONFIG_HOME $HOME/.config"
# Switch back to dialog for any ad-hoc use of apt-get
ENV DEBIAN_FRONTEND=
